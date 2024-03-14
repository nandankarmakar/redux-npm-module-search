import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from '../state/index';

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector;
