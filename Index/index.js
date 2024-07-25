const main = document.getElementById('main')
const wallpapers = [
 '../Wallpapers/Wallpaper1.jpg',
 '../Wallpapers/Wallpaper2.jpg',
 '../Wallpapers/Wallpaper3.jpg',
 '../Wallpapers/Wallpaper4.jpg',
 '../Wallpapers/Wallpaper5.jpg',
 '../Wallpapers/Wallpaper6.jpg',
 '../Wallpapers/Wallpaper7.jpg'
]
console.log(wallpapers)

const wallpaperChange = () =>{
    const random = Math.floor(Math.random() * wallpapers.length);
    const newWallpaper = wallpapers[random]
    main.style.backgroundImage = `url(${newWallpaper})`;
}

setInterval(() => {
    wallpaperChange()
}, 10000)

wallpaperChange()