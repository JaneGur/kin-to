import {Button} from "@/components/ui";


const categories = {

}



export const Categories = () => {
  return (
    <div className='inline-flex gap-1 p-1 rounded-2xl'>
      <Button variant={'ghost'} className='text-black'>Супы</Button>
      <Button variant={'ghost'} className='text-black'>Салаты</Button>
      <Button variant={'ghost'} className='text-black'>Закуски</Button>
      <Button variant={'ghost'} className='text-black'>Горячие блюда</Button>
      <Button variant={'ghost'} className='text-black'>Суши</Button>
      <Button variant={'ghost'} className='text-black'>Роллы</Button>
      <Button variant={'ghost'} className='text-black'>Наборы</Button>
      <Button variant={'ghost'} className='text-black'>Десерты</Button>
      <Button variant={'ghost'} className='text-black'>Напитки</Button>
      <Button variant={'ghost'} className='text-black'>Топпинги</Button>
    </div>
  )
}