<tr class="userFile transition-all hover:bg-gray-100 hover:shadow-lg" id="f{{ $file->id }}">
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
                <img
                    class="w-10 h-10 rounded-full"
                    id="if{{ $file->id }}"
                    src="/blog/{{ $file->path }}"
                    alt=""
                />
            </div>
            <div class="ml-4">
                <div class="fileName text-sm font-medium text-gray-900">{{ $file->name }}</div>
            </div>
        </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="paths text-sm text-gray-900" id="pf{{ $file->id }}">{{ $file->path }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span
            class="fileActive inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          Active
        </span>
    </td>
    <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        <div class="text-sm text-gray-500">{{$file->created_at}}</div>
        <div class="text-sm text-gray-500">By: {{$file->user->name}}</div>
    </td>
    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <p class="delFile text-indigo-600 hover:text-indigo-900 cursor-pointer" id="df{{ $file->id }}">Delete</p>
    </td>
</tr>
