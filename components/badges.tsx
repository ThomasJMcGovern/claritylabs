import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, MapPin, RefreshCw } from "lucide-react"

export function Badges() {
  const badges = [
    { icon: CheckCircle, text: "cGMP-made" },
    { icon: Shield, text: "3rd-party tested" },
    { icon: MapPin, text: "Made in USA" },
    { icon: RefreshCw, text: "Money-back guarantee" },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="flex items-center gap-2 px-3 py-2 bg-stone-100 text-stone-700 hover:bg-stone-200"
        >
          <badge.icon className="w-4 h-4" />
          {badge.text}
        </Badge>
      ))}
    </div>
  )
}
