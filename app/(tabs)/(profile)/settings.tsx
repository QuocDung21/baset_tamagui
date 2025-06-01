import { useState } from "react";
import {
  YStack,
  XStack,
  Text,
  Switch,
  Button,
  Separator,
  ScrollView,
  Card,
  Avatar,
  H3,
  H4,
  ListItem,
  View,
} from "tamagui";
import {
  Bell,
  Shield,
  Palette,
  User,
  Globe,
  HelpCircle,
  LogOut,
  ChevronRight,
  Moon,
  Sun,
} from "@tamagui/lucide-icons";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  const settingsGroups = [
    {
      title: "Tài khoản",
      items: [
        {
          icon: User,
          title: "Thông tin cá nhân",
          description: "Cập nhật thông tin và ảnh đại diện",
          action: "navigate",
        },
        {
          icon: Shield,
          title: "Bảo mật",
          description: "Đổi mật khẩu và xác thực 2 bước",
          action: "navigate",
        },
      ],
    },
    {
      title: "Tùy chọn",
      items: [
        {
          icon: Bell,
          title: "Thông báo",
          description: "Bật/tắt thông báo đẩy",
          action: "toggle",
          value: notifications,
          setValue: setNotifications,
        },
        {
          icon: darkMode ? Moon : Sun,
          title: "Chế độ tối",
          description: "Bật/tắt giao diện tối",
          action: "toggle",
          value: darkMode,
          setValue: setDarkMode,
        },
        {
          icon: Shield,
          title: "Xác thực sinh trắc học",
          description: "Sử dụng vân tay hoặc Face ID",
          action: "toggle",
          value: biometric,
          setValue: setBiometric,
        },
        {
          icon: Globe,
          title: "Sao lưu tự động",
          description: "Tự động sao lưu dữ liệu",
          action: "toggle",
          value: autoBackup,
          setValue: setAutoBackup,
        },
      ],
    },
    {
      title: "Khác",
      items: [
        {
          icon: Palette,
          title: "Giao diện",
          description: "Tùy chỉnh màu sắc và theme",
          action: "navigate",
        },
        {
          icon: Globe,
          title: "Ngôn ngữ",
          description: "Tiếng Việt",
          action: "navigate",
        },
        {
          icon: HelpCircle,
          title: "Trợ giúp & Hỗ trợ",
          description: "FAQ và liên hệ hỗ trợ",
          action: "navigate",
        },
      ],
    },
  ];

  return (
    <ScrollView flex={1} bg="$background">
      <YStack gap="$4" p="$4">
        {/* Header với avatar */}
        <Card p="$4" bg="$blue2" borderRadius="$4">
          <XStack gap="$4" ai="center">
            <Avatar circular size="$6">
              <Avatar.Image src="https://picsum.photos/200/200" />
              <Avatar.Fallback bg="$blue10">
                <User size={24} color="white" />
              </Avatar.Fallback>
            </Avatar>
            <YStack gap="$1" flex={1}>
              <H3 color="$blue11">Nguyễn Văn A</H3>
              <Text fontSize="$3" color="$blue10">
                nguyen.van.a@email.com
              </Text>
            </YStack>
          </XStack>
        </Card>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <YStack key={groupIndex} gap="$2">
            <H4 color="$gray11" px="$2">
              {group.title}
            </H4>
            <Card bg="$background" borderColor="$borderColor">
              {group.items.map((item, itemIndex) => (
                <View key={itemIndex}>
                  <ListItem
                    px="$4"
                    py="$3"
                    pressTheme
                    onPress={() => {
                      if (item.action === "navigate") {
                        console.log(`Navigate to ${item.title}`);
                      }
                    }}
                  >
                    <XStack gap="$3" ai="center" flex={1}>
                      <View
                        bg="$blue3"
                        p="$2"
                        borderRadius="$3"
                        ai="center"
                        jc="center"
                      >
                        <item.icon size={20} color="$blue10" />
                      </View>
                      <YStack gap="$1" flex={1}>
                        <Text fontSize="$4" fontWeight="500">
                          {item.title}
                        </Text>
                        <Text fontSize="$3" color="$gray11">
                          {item.description}
                        </Text>
                      </YStack>
                      {item.action === "toggle" && item.setValue ? (
                        <Switch
                          size="$3"
                          checked={item.value}
                          onCheckedChange={item.setValue}
                        >
                          <Switch.Thumb animation="quick" />
                        </Switch>
                      ) : (
                        <ChevronRight size={20} color="$gray11" />
                      )}
                    </XStack>
                  </ListItem>
                  {itemIndex < group.items.length - 1 && <Separator mx="$4" />}
                </View>
              ))}
            </Card>
          </YStack>
        ))}

        {/* Logout Button */}
        <Card bg="$red2" borderColor="$red6">
          <ListItem px="$4" py="$3" pressTheme>
            <XStack gap="$3" ai="center">
              <View bg="$red3" p="$2" borderRadius="$3" ai="center" jc="center">
                <LogOut size={20} color="$red10" />
              </View>
              <Text fontSize="$4" fontWeight="500" color="$red11">
                Đăng xuất
              </Text>
            </XStack>
          </ListItem>
        </Card>

        {/* App Version */}
        <XStack jc="center" pt="$4">
          <Text fontSize="$2" color="$gray10">
            Phiên bản 1.0.0
          </Text>
        </XStack>
      </YStack>
    </ScrollView>
  );
}
