# Cấu trúc Feature-Based + Expo Router Group

Dự án này sử dụng mô hình tổ chức code **Feature-Based** kết hợp với **Expo Router Group** để tạo ra một cấu trúc có thể mở rộng và dễ bảo trì.

## Cấu trúc tổng quan

```
/src
  /features          # Các chức năng chính của ứng dụng
    /auth           # Chức năng xác thực
    /home           # Chức năng trang chủ
    /profile        # Chức năng profile
  /shared           # Code dùng chung
    /components     # UI components dùng chung
    /hooks          # Custom hooks dùng chung
    /services       # API services dùng chung
    /types          # TypeScript types dùng chung
    /utils          # Utility functions dùng chung
    /constants      # Constants dùng chung
    /providers      # Global providers (Tamagui, Toast, etc.)

/app                # Expo Router structure
  /(auth)           # Auth group - không hiển thị tabs
    /login
    /register
  /(tabs)           # Main app với tabs
    /(home)         # Home group trong tabs
    /(profile)      # Profile group trong tabs
  /modal.tsx        # Modal screen (Expo Router convention)
  /_layout.tsx      # Root layout
```

## Nguyên tắc tổ chức

### 1. Feature-Based Organization
- Mỗi feature được tổ chức trong thư mục riêng
- Mỗi feature có cấu trúc con: `components`, `hooks`, `services`, `types`, `utils`
- Code liên quan đến cùng một chức năng được giữ gần nhau

### 2. Expo Router Groups
- Sử dụng `(groupName)` để tạo routes nhóm
- `(auth)` - Không hiển thị navigation, chỉ stack navigation
- `(tabs)` - Hiển thị tab navigation
- `(home)`, `(profile)` - Nested groups trong tabs

### 3. Shared Resources
- Code dùng chung được đặt trong `/src/shared`
- `providers/` - Global providers như TamaguiProvider, ToastProvider
- `components/` - UI components có thể tái sử dụng
- Tránh duplicate code giữa các features

### 4. Modal Organization
- Modal routes (như `modal.tsx`) giữ nguyên trong `app/` theo Expo Router convention
- Modal content được tách ra thành shared components để tái sử dụng
- Ví dụ: `modal.tsx` → `@shared/components/AboutModal`

## Cách sử dụng

### Import từ features:
```typescript
import { useAuth, LoginForm } from '@auth/index';
import { useHomeData } from '@home/hooks';
```

### Import từ shared:
```typescript
import { Provider } from '@shared/providers';
import { AboutModal, ToastControl } from '@shared/components';
import { useApi } from '@shared/hooks';
```

### Import types:
```typescript
import type { User } from '@auth/types';
import type { ApiResponse } from '@shared/types';
```

## File Organization Patterns

### ✅ Nên đặt trong `src/shared`:
- Global providers (TamaguiProvider, AuthProvider)
- Reusable UI components (Button, Input, Modal content)
- API clients và utilities
- Shared types và constants

### ✅ Nên đặt trong `app/`:
- Expo Router files (screens, layouts)
- Route-specific logic
- Navigation configuration

### ✅ Nên đặt trong `src/features`:
- Feature-specific components
- Business logic hooks
- Feature-specific types
- API services cho feature cụ thể

## Lợi ích

1. **Scalability**: Dễ dàng thêm features mới
2. **Maintainability**: Code được tổ chức logic, dễ tìm và sửa
3. **Reusability**: Shared components và utilities
4. **Team Collaboration**: Các team có thể làm việc độc lập trên từng feature
5. **Clear Navigation**: Expo Router groups tạo navigation rõ ràng
6. **Separation of Concerns**: Routing logic tách biệt với business logic 