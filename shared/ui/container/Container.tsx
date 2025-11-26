import {cn} from "@/lib/utils";


interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className, children}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
      {children}
    </div>
  )
}