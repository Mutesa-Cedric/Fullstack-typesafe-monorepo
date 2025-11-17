"use client";

import { Provider } from "react-redux";
import store from "../src/store";

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
