import {Button} from "@/components/ui";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {changeThemeModeAC, selectThemeMode} from "@/entities/admin/theme/model/slice";


export const ThemeToggle = () => {

    const theme = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch();

    return (
        <Button
            variant="secondary"
            className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
            onClick={()=>dispatch(changeThemeModeAC({themeMode: theme === 'dark' ? "light" : "dark"}))}>
            {theme === 'light' ? "Светлая тема" : "Тёмная тема"}
        </Button>
    );
};
