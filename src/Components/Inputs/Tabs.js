import { useEffect, useState } from 'react';


export default function Tabs() {
    return (
        <div class="p-8">
            <ul class="list-reset flex border-b">
                <li class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-800 font-semibold" href="#">Active</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-blue-400 hover:text-blue-600 font-semibold" href="#">Tab</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-blue-400 hover:text-blue-800 font-semibold" href="#">Tab</a>
                </li>
            </ul>
        </div>
    )
}
