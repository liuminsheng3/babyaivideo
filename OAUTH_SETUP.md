# OAuth配置指南

## 重要：必须在以下三个地方正确配置OAuth

### 1. Supabase Dashboard配置
登录到 [Supabase Dashboard](https://supabase.com/dashboard)

#### Authentication → URL Configuration:
- **Site URL**: `https://www.babyaivideo.com`
- **Redirect URLs** (添加以下所有URL):
  ```
  https://www.babyaivideo.com/auth/callback
  https://babyaivideo.com/auth/callback
  http://localhost:3000/auth/callback
  ```

#### Authentication → Providers → Google:
- **Enable Google provider**: ON
- **Client ID**: 从Google Cloud Console获取
- **Client Secret**: 从Google Cloud Console获取

### 2. Google Cloud Console配置
访问 [Google Cloud Console](https://console.cloud.google.com/)

#### APIs & Services → Credentials → OAuth 2.0 Client IDs:
找到你的OAuth客户端 (client_id: `490151248611-78e7q4muele8fg56magrpf43eg5podoo.apps.googleusercontent.com`)

#### Authorized redirect URIs (必须包含以下URL):
```
https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback
https://www.babyaivideo.com/auth/callback
https://babyaivideo.com/auth/callback
```

⚠️ **注意**: Supabase的回调URL格式是: `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback`

### 3. Vercel环境变量配置
在 [Vercel Dashboard](https://vercel.com/) 中设置:

```
NEXT_PUBLIC_SITE_URL=https://www.babyaivideo.com
NEXT_PUBLIC_SUPABASE_URL=https://gwwvqayyzdxmckyphwge.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[你的anon key]
SUPABASE_SERVICE_ROLE_KEY=[你的service role key]
```

## 测试检查清单

### ✅ 检查1: Supabase配置
1. 登录Supabase Dashboard
2. 进入 Authentication → Providers → Google
3. 确认已启用且有正确的Client ID和Secret

### ✅ 检查2: Google Console配置  
1. 访问 https://console.cloud.google.com/
2. 进入 APIs & Services → Credentials
3. 点击你的OAuth 2.0 Client ID
4. 确认Authorized redirect URIs包含:
   - `https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback`

### ✅ 检查3: 域名配置
确保 www.babyaivideo.com 和 babyaivideo.com 都指向Vercel:
- 两个域名都应该在Vercel项目的Domains设置中
- www 应该是主域名

## 常见问题

### 问题: 卡在Google登录页面不跳转
**原因**: Google OAuth的redirect_uri没有在Google Console中配置
**解决**: 在Google Console添加 `https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback`

### 问题: 跳转后显示404
**原因**: 回调URL路径不正确
**解决**: 确保 `/auth/callback` 路由存在且middleware不会拦截

### 问题: 登录成功但没有跳转到dashboard
**原因**: Session没有正确设置或redirect逻辑有问题
**解决**: 检查浏览器控制台日志，确认session是否创建成功

## 调试步骤

1. **查看浏览器网络请求**:
   - 打开开发者工具 → Network
   - 查看 /auth/callback 请求
   - 检查是否有正确的code参数

2. **查看Vercel函数日志**:
   - 访问 Vercel Dashboard → Functions
   - 查看 auth/callback 的日志输出

3. **检查Supabase日志**:
   - Supabase Dashboard → Logs → Auth
   - 查看是否有错误信息

## 完整流程图

```
用户点击"Sign in with Google"
    ↓
调用 signInWithGoogle() action
    ↓
生成OAuth URL (包含redirect_to参数)
    ↓
重定向到 Google OAuth
    ↓
用户授权
    ↓
Google重定向到 Supabase callback
(https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback)
    ↓
Supabase重定向到我们的callback
(https://www.babyaivideo.com/auth/callback?code=xxx)
    ↓
exchangeCodeForSession()
    ↓
创建session
    ↓
重定向到 /en/dashboard
```

## 需要立即检查的配置

基于你提供的URL，请立即检查:

1. **Google Console**: 确认 `https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback` 在Authorized redirect URIs中

2. **Supabase Dashboard**: 
   - Authentication → URL Configuration → Redirect URLs 包含 `https://www.babyaivideo.com/auth/callback`
   - Authentication → Providers → Google 已启用并配置正确

这两个配置是OAuth工作的关键！