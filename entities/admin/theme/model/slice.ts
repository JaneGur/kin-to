import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ThemeMode} from "@/entities/admin/theme/model/types";


export const themeModeSlice = createSlice({
    name: "admin-themeMode",
    initialState: {
        themeMode: "dark" as ThemeMode,
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode,
    },
    reducers: {
        changeThemeModeAC: (state, action: PayloadAction<{ themeMode: ThemeMode }>) => {
            state.themeMode = action.payload.themeMode;
        }
    },
})

export const {selectThemeMode} = themeModeSlice.selectors
export const {changeThemeModeAC} = themeModeSlice.actions
export const themeModeReducer = themeModeSlice.reducer