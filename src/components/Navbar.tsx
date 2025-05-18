import { AlignJustify, Crown, History } from 'lucide-react'
import { Link} from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-2">
        <Link to={'#'} className="w-fit text-[#C21010] border-2 p-2 rounded bg-[#FFFDE3]">
          <AlignJustify size={16} color="red" />
        </Link>
        <div className="flex gap-2">
          <Link to={'/leaderboard'} className="w-fit text-[#C21010] border-2 p-2 rounded bg-[#FFFDE3]">
            <Crown size={16} color="red" />
          </Link>
          <Link to={'/history'} className="w-fit text-[#C21010] border-2 p-2 rounded bg-[#FFFDE3]">
            <History size={16} color="red" />
          </Link>
        </div>
      </div>
  )
}

export default Navbar