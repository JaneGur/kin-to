import {cn} from "@/lib/utils";
import {Container} from "@/shared/ui/container";
import {ArrowRight, ShoppingCart, User} from "lucide-react";
import {Button} from "@/components/ui";
import Image from "next/image";


interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({className}) => {
  return (
    <header className={cn('border border-b bg-black', className)}>
      <Container className='flex items-center justify-between py-3'>
        {/*Left*/}
        <div className='flex items-center gap-4 text-white'>
          <Image
            src={'/logo.jpg'}
            alt={'Ki-to logo'}
            width={100}
            height={100}
            className='rounded-full object-cover'
            />
          <div>
            <h1 className='text-3xl uppercase font-devon'>
              KIN-TO
            </h1>
            <p className='text-sm text-gray-400 leading-3'>
              АЗИАТСКАЯ КУХНЯ
            </p>
          </div>
        </div>
        {/*Right*/}
        <div className='flex items-center gap-3'>
          <Button
            variant={"outline"}
            className={'border-yellow-400 text-yellow-300'}
          >
            <User size={16} />
            ВОЙТИ
          </Button>

          <div>
            <Button
              variant={'default'}
              className='relative group !bg-yellow-300 !text-white'
            >
              <b>520 ₽</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart
                  size={16}
                  className='relative'
                  strokeWidth={2}
                />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className='absolute
                right-5
                transition
                duration-300
                -translate-x-2
                opacity-0
                group-hover:opacity-100
                group-hover:translate-x-0'
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}