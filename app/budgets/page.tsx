"use client"
import { BudgetDashboard } from "@/components/ui/budget-dashboard"
import { NavbarDemo } from "@/components/Navbar"

// export default function BudgetDashboard() { //This function is now in a separate component
//   const [budgets, setBudgets] = useState<Budget[]>(initialBudgets)
//   const [isDialogOpen, setIsDialogOpen] = useState(false)

//   const handleCreateBudget = ({ category, amount }: { category: string; amount: number }) => {
//     const newBudget: Budget = {
//       id: String(budgets.length + 1),
//       category,
//       icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6cie0rkdUbDUYNKlxAc885jbf5W9X.png", // Using placeholder icon
//       totalAmount: amount,
//       spent: 0,
//       itemCount: 0,
//     }
//     setBudgets([...budgets, newBudget])
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">My Budgets</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <Button
//             onClick={() => setIsDialogOpen(true)}
//             variant="outline"
//             className="h-[200px] border-2 border-dashed border-zinc-800 bg-zinc-900/50 text-[#c1ff72] hover:bg-zinc-900 hover:text-[#c1ff72]"
//           >
//             <div className="flex flex-col items-center gap-2">
//               <Plus size={24} />
//               <span>Create New Budget</span>
//             </div>
//           </Button>
//           {budgets.map((budget) => (
//             <BudgetCard key={budget.id} budget={budget} />
//           ))}
//         </div>
//       </div>
//       <CreateBudgetDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onCreateBudget={handleCreateBudget} />
//     </div>
//   )
// }

export default function Home() {
    return (
      <main className="min-h-screen bg-black ">
        <div className="flex justify-center bg-black p-8">
            <NavbarDemo />
        </div>
        <div className="bg-black min-h-screen w-full p-10 py-17">
          <BudgetDashboard />
        </div>
      </main>
    );
  }
  