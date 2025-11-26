import {Button} from "@/components/ui";
import {changeThemeModeAC, selectThemeMode} from "@/app/admin/admin-slice";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";


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
