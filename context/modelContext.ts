import React from "react";

type ModelContext = {
    model: any | undefined;
    setModel: any | undefined;
}
const context = React.createContext<ModelContext>({ setModel: undefined, model: undefined });

export const modelContext = context;
export default context.Provider;