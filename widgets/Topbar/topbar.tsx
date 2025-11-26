import {Categories} from "@/widgets/DishMenu/ui/categories";
import {Container} from "@/shared/ui/container";


export const Topbar = () => {
  return(
    <div className='sticky top-0 py-3 shadow-lg shadow-black/5 z-10'>
      <Container className='flex items-center justify-between'>
      <Categories/>
      </Container>
    </div>
  )
}