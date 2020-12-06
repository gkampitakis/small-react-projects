const IMAGE_PATH = './images/HomeComponents';

export default
  [{
    route: '/accordion',
    filePath: '/accordion/Accordion',
    projectName: 'Accordion',
    imgPath: `${IMAGE_PATH}/Accordion`
  },
  {
    route: '/birthday',
    filePath: '/birthday/Birthday',
    projectName: 'Birthday',
    imgPath: `${IMAGE_PATH}/Birthday`
  },
  {
    route: '/cart',
    filePath: '/cart/Wrapper.tsx',
    projectName: 'Cart',
    imgPath: `${IMAGE_PATH}/Cart`
  },
  {
    route: '/cocktails',
    filePath: '/cocktails/App.tsx',
    projectName: 'Cocktails',
    imgPath: `${IMAGE_PATH}/Accordion`, // FIXME: add image here
    exact: false // NOTE: we don't want exact here as we have nested routes inside
  },
  {
    route: '/dark-mode',
    filePath: '/dark_mode/App',
    projectName: 'Dark Mode',
    imgPath: `${IMAGE_PATH}/DarkMode`
  },
  {
    route: '/grocery-bud',
    filePath: '/grocery_bud/GroceryBud',
    projectName: 'Grocery Bud',
    imgPath: `${IMAGE_PATH}/GroceryBud`
  },
  {
    route: '/lorem-ipsum',
    filePath: '/lorem_ipsum/LoremGenerator',
    projectName: 'Lorem Generator',
    imgPath: `${IMAGE_PATH}/LoremGenerator`
  },
  {
    route: '/markdown-preview',
    filePath: '/markdown_preview/App.tsx',
    projectName: 'Markdown Preview',
    imgPath: `${IMAGE_PATH}/MarkdownPreview`
  },
  {
    route: '/menu',
    filePath: '/menu/Menu',
    projectName: 'Menu',
    imgPath: `${IMAGE_PATH}/Menu`
  },
  {
    route: '/navbar',
    filePath: '/navbar/Navbar',
    projectName: 'Navbar',
    imgPath: `${IMAGE_PATH}/Navbar`
  },
  {
    route: '/photo-album',
    filePath: '/photo_album/PhotoAlbum',
    projectName: 'Photo Album',
    imgPath: `${IMAGE_PATH}/PhotoAlbum`
  },
  {
    route: '/reviews',
    filePath: '/reviews/Reviews',
    projectName: 'Reviews',
    imgPath: `${IMAGE_PATH}/Reviews`
  },
  {
    route: '/sidebar-modal',
    filePath: '/sidebar_and_modal/App',
    projectName: 'Sidebar and Modal',
    imgPath: `${IMAGE_PATH}/SidebarModal`
  },
  {
    route: '/slider',
    filePath: '/slider/Slider',
    projectName: 'Slider',
    imgPath: `${IMAGE_PATH}/Slider`
  },
  {
    route: '/tabs',
    filePath: '/tabs/Tabs',
    projectName: 'Tabs',
    imgPath: `${IMAGE_PATH}/Tabs`
  },
  {
    route: '/tours',
    filePath: '/tours/Tours',
    projectName: 'Tours',
    imgPath: `${IMAGE_PATH}/Tours`
  }];
