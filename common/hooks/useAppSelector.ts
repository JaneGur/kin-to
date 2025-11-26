import {useSelector} from 'react-redux'
import {RootState} from "@/shared/config/store";


export const useAppSelector = useSelector.withTypes<RootState>()