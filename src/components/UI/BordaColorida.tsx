const topColors = [
    "bg-orange-500", "bg-yellow-400", "bg-red-600",
    "bg-green-500", "bg-blue-500",
  ]
  const leftColors = [
    "bg-blue-400", "bg-red-600", "bg-green-500",
    "bg-yellow-400", "bg-orange-500", "bg-green-400",
  ]
  const rightColors = [
    "bg-yellow-400", "bg-red-600", "bg-green-500",
    "bg-blue-500", "bg-orange-500", "bg-yellow-300",
  ]
  const bottomColors = [
    "bg-yellow-400", "bg-green-500", "bg-blue-500",
  ]
  
  function Strip({ colors, vertical = false }: {
    colors: string[]; vertical?: boolean
  }) {
    return (
      <div className={`flex ${vertical ? "flex-col h-full w-4" : "w-full h-4"}`}>
        {colors.map((c, i) => (
          <div key={i} className={`flex-1 ${c}`} />
        ))}
      </div>
    )
  }
  
export function BordaColorida({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col w-full h-full">
        <Strip colors={topColors} />
        <div className="flex flex-1">
          <Strip colors={leftColors} vertical />
          <div className="flex-1 bg-white">
            {children}
          </div>
          <Strip colors={rightColors} vertical />
        </div>
        <Strip colors={bottomColors} />
      </div>
    )
  }