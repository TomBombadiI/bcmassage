declare global {
  interface Window {
    VK: any
  }
}

class VKWidget {
  constructor() {
    const script = document.createElement('script')
    script.src = 'https://vk.com/js/api/openapi.js?169'
    script.async = true
    script.onload = () => {
      window.VK.Widgets.Group("vk_groups", {
        mode: 3,
        height: 400,
        color1: "FFFFFF",
        color2: "000000",
        color3: "5181B8"
      }, 77115098);
    }
    document.body.appendChild(script)
  }
}

export default VKWidget;
