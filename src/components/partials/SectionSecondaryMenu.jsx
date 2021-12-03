import { ItemSecondaryMenu } from "./ItemSecondaryMenu";

export function SectionSecondaryMenu({ items }) {
    return (
        <div className="w-full flex justify-between text-center px-2 mt-1">
            {items.map(item => <ItemSecondaryMenu key={item.to} item={item} />)}
        </div>
    )
}