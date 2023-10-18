// let lists = document.querySelectorAll('.item')

document.getElementById('next').onclick = function (params) {
    let lists = document.querySelectorAll('.item');
    console.log("lists", lists);
    document.getElementById('slide').appendChild(lists[0])
}

document.getElementById('prev').onclick = function (params) {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1])
}

// document.querySelectorAll('item').onclick = function (params) {
//     let lists = document.querySelectorAll('.item');
//     console.log("lists", lists);
//     document.getElementById('slide').appendChild(lists[0])
// }

const items = document.querySelectorAll('.item');
debugger
console.log('befor >> items', items);

for (const item of items) {
    item.addEventListener('click', function () {
        console.log("Inside for ", 'item', item, 'items', items);
        // Do something when the item is clicked
        document.getElementById('slide').appendChild(items[0])
    });
}

// const items = document.querySelectorAll('.item');
// console.log('befor >> items', items);

// for (const item of items) {
// const items = document.querySelectorAll('.item');

// for (const item of items) {
//     item.addEventListener('click', function () {
//         console.log("Inside for ", 'item', item);
//         document.getElementById('slide').appendChild(item);
//     });
// }
// document.querySelectorAll('.item').addEventListener('click', function () {
//     let lists = document.querySelectorAll('.item');
//     console.log("lists", lists);
//     document.getElementById('slide').appendChild(lists[0]);
// });
// }