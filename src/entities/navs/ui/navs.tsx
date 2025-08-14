import { NavLink } from "react-router";

import { cn } from "@shared";
import { type NavsProps } from "../lib";

const block = cn('nav-item');

export function Navs({ buttons, className, paths }: NavsProps) {
  return (
    <div className={block(null, [className])}>
      {buttons.map((button, i) => (
        <NavLink
          className={({ isActive }) => block({ active: isActive })}
          key={`nav-item-${i}`}
          to={paths[i]}
        >
          {button}
        </NavLink>
      ))}
    </div>
  );
}
