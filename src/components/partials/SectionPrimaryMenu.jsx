import { ItemPrimaryMenu } from "./ItemPrimaryMenu";

export function SectionPrimaryMenu({ items }) {
    return (
        <div className="w-full flex justify-between divide-x-2 divide-blue-100 text-center shadow-xl">
            {items.map(item => <ItemPrimaryMenu key={item.to} item={item} />)}
        </div>
    )
}
