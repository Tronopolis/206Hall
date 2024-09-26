import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import Menu from "./Menu"; // Import the Menu component

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
        <Meta />
        <Links />
        
      </head>
      <body>
        <div className="flex">
          <div className="w-1/4">
            <Menu /> {/* Add the Menu component */}
          </div>
          <div className="w-3/4">
            {children}
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
