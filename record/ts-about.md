# TypeScript相关知识记录

## Zod: TypeScript优先的数据验证库

Zod是一个TypeScript优先的数据验证库，具有强大的类型推导能力，能够帮助开发者在运行时进行数据验证，同时保持完整的类型安全。

### 基本概念

Zod的核心理念是"schema first"（模式优先）。你先定义数据的结构和验证规则，然后Zod会：

1. 在运行时验证数据是否符合这些规则
2. 自动推导出对应的TypeScript类型
3. 提供类型安全的数据处理方法

### 为什么使用Zod？

与其他验证库相比，Zod有以下优势：

- **无需重复类型定义**：一次定义schema，同时获得运行时验证和TypeScript类型
- **运行时安全**：在接收外部数据时（如API响应、用户输入）确保数据结构正确
- **零依赖**：没有外部依赖，体积小
- **可组合性强**：可以像乐高积木一样组合不同的schema
- **类型推导强大**：TypeScript能够从Zod schema中推导出精确的类型

### 基本使用方法

以下是从示例中提取的Zod基本使用模式：

```typescript
import { z } from "zod";

// 定义一个schema
export const EmployeeSchema = z.object({
    id: z.number(),
    employeeNo: z.string(),
    name: z.string(),
    gender: z.string(),
    birthDate: z.string(),
    address: z.string(),
    telephone: z.string(),
    hireDate: z.date(),
    department: z.string(),
    headship: z.string(),
    salary: z.number(),
})

// 从schema推导出TypeScript类型
export type Employee = z.infer<typeof EmployeeSchema>

// 创建一个数组schema
export const EmployeeListSchema = z.array(EmployeeSchema)
```

### Zod的核心API

Zod提供了丰富的API来定义几乎所有类型的数据结构：

#### 基础类型

```typescript
// 基础类型
const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const dateSchema = z.date();
const nullSchema = z.null();
const undefinedSchema = z.undefined();
const anySchema = z.any();
const unknownSchema = z.unknown();
```

#### 对象类型

```typescript
const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(18).optional(),
  role: z.enum(["admin", "user", "guest"])
});

type User = z.infer<typeof userSchema>;
// 推导出的类型:
// {
//   username: string;
//   email: string;
//   age?: number;
//   role: "admin" | "user" | "guest";
// }
```

#### 数组和元组

```typescript
// 数组
const stringArraySchema = z.array(z.string());

// 元组
const coordinateSchema = z.tuple([
  z.number(), // x
  z.number(), // y
  z.string().optional() // label (可选)
]);
```

#### 联合类型和交叉类型

```typescript
// 联合类型
const responseSchema = z.union([
  z.object({ status: z.literal("success"), data: z.any() }),
  z.object({ status: z.literal("error"), error: z.string() })
]);

// 交叉类型
const basePersonSchema = z.object({ name: z.string() });
const employeeSchema = basePersonSchema.extend({
  role: z.string()
});
```

### 实际应用场景

Zod在前端开发中有多种应用场景：

#### 1. API响应验证

```typescript
const fetchUsers = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  
  // 验证API返回的数据结构
  const users = UserListSchema.parse(data);
  return users; // 类型安全，确保数据结构正确
}
```

#### 2. 表单验证

通常结合React Hook Form等库使用：

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(8, "密码至少8个字符")
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: zodResolver(loginSchema)
  });
  
  const onSubmit = (data) => {
    // data已经被验证，类型安全
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 表单内容 */}
    </form>
  );
}
```

#### 3. 状态管理库的状态验证

```typescript
// 在Redux中使用
const userSlice = createSlice({
  name: 'user',
  initialState: UserSchema.parse({
    name: "",
    email: "",
    loggedIn: false
  }),
  reducers: {
    // ...
  }
});
```

#### 4. 配置文件验证

```typescript
const ConfigSchema = z.object({
  apiUrl: z.string().url(),
  timeout: z.number().positive(),
  maxRetries: z.number().int().nonnegative(),
  debug: z.boolean().default(false)
});

// 从环境变量或配置文件加载配置
const rawConfig = loadConfig();
const config = ConfigSchema.parse(rawConfig);
```

### 高级功能和技巧

#### 1. 自定义验证器

```typescript
const passwordSchema = z.string()
  .min(8, "密码至少8个字符")
  .refine(
    (password) => /[A-Z]/.test(password), 
    { message: "密码必须包含至少一个大写字母" }
  )
  .refine(
    (password) => /[0-9]/.test(password),
    { message: "密码必须包含至少一个数字" }
  );
```

#### 2. 默认值

```typescript
const userSchema = z.object({
  name: z.string(),
  role: z.string().default("user"),
  createdAt: z.date().default(() => new Date())
});
```

#### 3. 转换器

```typescript
// 自动将字符串转换为日期
const dateStringSchema = z.string().transform((str) => new Date(str));

// 自动转换ID类型
const idSchema = z.string().uuid().transform((id) => ({ id }));
```

#### 4. 递归Schema

```typescript
// 定义一个可递归的评论结构
const commentSchema: z.ZodType<Comment> = z.lazy(() => 
  z.object({
    id: z.number(),
    text: z.string(),
    replies: z.array(commentSchema)
  })
);

type Comment = z.infer<typeof commentSchema>;
```

### 与TypeScript的完美结合

Zod和TypeScript协同工作的方式非常优雅：

```typescript
// 定义schema
const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(0).max(120).optional()
});

// 推导类型
type User = z.infer<typeof userSchema>;

// 使用schema验证数据
function processUser(data: unknown): User {
  return userSchema.parse(data);
}

// 或者返回验证结果而不抛出错误
function safeProcessUser(data: unknown): { success: true, data: User } | { success: false, error: z.ZodError } {
  const result = userSchema.safeParse(data);
  return result;
}
```

### 最佳实践

1. **集中管理schema**：将相关的schema集中在单独的文件中，便于复用
2. **使用`safeParse`而非`parse`**：在处理用户输入时，优先使用不抛出错误的`safeParse`
3. **组合而非重复**：通过组合和扩展已有schema创建新schema
4. **提供有意义的错误信息**：利用Zod的错误自定义功能提供友好的错误信息
5. **考虑性能**：在性能关键路径上，使用缓存或预编译schema

### 项目中schema.ts的解析

```typescript
import { z } from "zod";

// 定义员工数据结构和验证规则
export const EmployeeSchema = z.object({
    id: z.number(),              // 员工ID必须是数字
    employeeNo: z.string(),      // 员工编号必须是字符串
    name: z.string(),            // 姓名必须是字符串
    gender: z.string(),          // 性别必须是字符串
    birthDate: z.string(),       // 出生日期以字符串形式存储
    address: z.string(),         // 地址必须是字符串
    telephone: z.string(),       // 电话必须是字符串
    hireDate: z.date(),          // 雇佣日期必须是Date对象
    department: z.string(),      // 部门必须是字符串
    headship: z.string(),        // 职位必须是字符串
    salary: z.number(),          // 薪资必须是数字
})

// 从schema自动推导出TypeScript类型
export type Employee = z.infer<typeof EmployeeSchema>

// 定义员工列表的schema，它是EmployeeSchema的数组
export const EmployeeListSchema = z.array(EmployeeSchema)
```

这个例子展示了Zod的核心用法：

1. 导入z从"zod"包
2. 定义一个对象schema，指定每个字段的类型和验证规则
3. 使用`z.infer`从schema推导出TypeScript类型
4. 组合基础schema创建更复杂的schema（如数组）

### 总结

Zod是现代TypeScript项目中的强大工具，它通过统一的schema定义同时解决了运行时验证和类型定义的问题。通过使用Zod，你可以：

- 确保从外部获取的数据符合预期结构
- 减少类型定义的重复工作
- 提高代码的健壮性和可靠性
- 获得更好的开发体验和类型提示

在前端开发中，Zod特别适合用于API响应验证、表单处理、状态管理和配置管理等场景，是构建类型安全应用的理想工具。
