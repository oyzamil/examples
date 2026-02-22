import "@/assets/tailwind.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

export const ThemeProvider = ({ children = null as ReactNode }) => (
	<StyleProvider container={document.body} layer hashPriority="high">
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#ff000a",
				},
			}}
		>
			{children}
		</ConfigProvider>
	</StyleProvider>
);
