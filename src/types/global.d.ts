/**
 * 全局类型声明文件
 * 用于解决项目中的类型导入问题
 */

// React声明
declare module 'react' {
  export = React;
  export as namespace React;
}

// React Router DOM声明
declare module 'react-router-dom' {
  export function Link(props: any): any;
  export function useNavigate(): any;
  export function BrowserRouter(props: any): any;
  export const BrowserRouter: any;
  export function Routes(props: any): any;
  export function Route(props: any): any;
  export function Navigate(props: any): any;
}

// 完整的styled-components声明
declare module 'styled-components' {
  import * as React from 'react';
  import * as CSS from 'csstype';

  export interface StyledInterface {
    // HTML元素
    a: any;
    abbr: any;
    address: any;
    area: any;
    article: any;
    aside: any;
    audio: any;
    b: any;
    base: any;
    bdi: any;
    bdo: any;
    big: any;
    blockquote: any;
    body: any;
    br: any;
    button: any;
    canvas: any;
    caption: any;
    cite: any;
    code: any;
    col: any;
    colgroup: any;
    data: any;
    datalist: any;
    dd: any;
    del: any;
    details: any;
    dfn: any;
    dialog: any;
    div: any;
    dl: any;
    dt: any;
    em: any;
    embed: any;
    fieldset: any;
    figcaption: any;
    figure: any;
    footer: any;
    form: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
    head: any;
    header: any;
    hgroup: any;
    hr: any;
    html: any;
    i: any;
    iframe: any;
    img: any;
    input: any;
    ins: any;
    kbd: any;
    keygen: any;
    label: any;
    legend: any;
    li: any;
    link: any;
    main: any;
    map: any;
    mark: any;
    marquee: any;
    menu: any;
    menuitem: any;
    meta: any;
    meter: any;
    nav: any;
    noscript: any;
    object: any;
    ol: any;
    optgroup: any;
    option: any;
    output: any;
    p: any;
    param: any;
    picture: any;
    pre: any;
    progress: any;
    q: any;
    rp: any;
    rt: any;
    ruby: any;
    s: any;
    samp: any;
    script: any;
    section: any;
    select: any;
    small: any;
    source: any;
    span: any;
    strong: any;
    style: any;
    sub: any;
    summary: any;
    sup: any;
    table: any;
    tbody: any;
    td: any;
    textarea: any;
    tfoot: any;
    th: any;
    thead: any;
    time: any;
    title: any;
    tr: any;
    track: any;
    u: any;
    ul: any;
    var: any;
    video: any;
    wbr: any;
    // SVG元素
    circle: any;
    clipPath: any;
    defs: any;
    ellipse: any;
    foreignObject: any;
    g: any;
    image: any;
    line: any;
    linearGradient: any;
    mask: any;
    path: any;
    pattern: any;
    polygon: any;
    polyline: any;
    radialGradient: any;
    rect: any;
    stop: any;
    svg: any;
    text: any;
    tspan: any;
  }

  export default function styled(tag: any): StyledInterface;
  export const css: any;
  export const keyframes: any;
  export const createGlobalStyle: any;
  export const ThemeProvider: any;
}

// react-redux声明
declare module 'react-redux' {
  export function Provider(props: any): any;
  export function useSelector(selector: any): any;
  export function useDispatch(): any;
}

// react-dom声明
declare module 'react-dom/client' {
  export function createRoot(container: Element | null): {
    render(element: React.ReactNode): void;
  };
}

// 扩展JSX命名空间
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}