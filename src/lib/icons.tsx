import {
  Bot,
  Boxes,
  Building2,
  Calendar,
  Clock,
  Code2,
  CreditCard,
  DollarSign,
  Globe,
  GraduationCap,
  Hammer,
  LayoutDashboard,
  LayoutGrid,
  MessageCircle,
  Network,
  Plug,
  Rocket,
  Search,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  LayoutDashboard,
  Sparkles,
  Building2,
  Plug,
  CreditCard,
  GraduationCap,
  Clock,
  Globe,
  Bot,
  Search,
  Boxes,
  Hammer,
  Rocket,
  LayoutGrid,
  Network,
  MessageCircle,
  DollarSign,
  Code2,
  Calendar,
  Server,
} as const;

export type IconName = keyof typeof icons;

export function getIcon(name: IconName): LucideIcon {
  return icons[name];
}
