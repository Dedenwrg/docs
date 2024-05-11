import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Allora'
      }
    }
  },
  docsRepositoryBase: 'https://github.com/allora-network/docs',
  logo: () => {
    return (
      <>
        <svg width="140" height="52" viewBox="0 0 1000 367">
          <path d="M333.119 211.64C335.611 203.274 336.969 194.408 336.969 185.227C336.969 184.207 336.931 183.205 336.894 182.185C301.132 161.077 274.167 115.856 262.879 94.3958C256.779 93.1345 250.456 92.4854 243.984 92.4854C237.513 92.4854 231.617 93.116 225.704 94.2845C220.664 103.781 212.537 117.971 201.862 132.68C189.551 149.651 171.903 169.943 151.074 182.259C151.037 183.242 151 184.225 151 185.227C151 194.427 152.358 203.311 154.868 211.695C170.322 204.443 184.344 193.703 196.674 181.591C187.878 202.347 178.077 222.49 167.867 238.46C173.372 246.288 180.067 253.225 187.673 259.012C198.831 242.727 210.101 221.303 221.408 194.835C217.409 222.064 211.607 245.898 203.239 268.62C211.533 272.664 220.534 275.501 229.999 276.93C235.988 261.683 240.711 246.529 244.431 226.812C248.169 246.455 252.911 261.572 258.899 276.763C268.328 275.242 277.273 272.311 285.511 268.193C277.421 246.288 271.731 223.325 267.714 196.894C278.686 222.342 289.64 243.023 300.463 258.864C308.069 253.058 314.745 246.084 320.231 238.238C310.096 222.323 300.37 202.328 291.63 181.721C303.866 193.759 317.758 204.424 333.101 211.64H333.119Z" fill="currentColor" />
          <path d="M428.674 120.104H452.125L500.615 246H476.987L465.173 212.675H414.921L403.107 246H380.361L428.674 120.104ZM420.916 195.924H459.355L440.488 141.792H439.959L420.916 195.924ZM510.311 120.104H530.412V246H510.311V120.104ZM552.842 120.104H572.943V246H552.842V120.104ZM636.634 248.469C629.346 248.469 622.822 247.293 617.062 244.942C611.419 242.474 606.6 239.123 602.603 234.892C598.724 230.66 595.726 225.605 593.611 219.728C591.612 213.85 590.613 207.385 590.613 200.332C590.613 193.396 591.612 186.99 593.611 181.113C595.726 175.235 598.724 170.18 602.603 165.949C606.6 161.717 611.419 158.425 617.062 156.074C622.822 153.606 629.346 152.372 636.634 152.372C643.922 152.372 650.387 153.606 656.029 156.074C661.789 158.425 666.609 161.717 670.488 165.949C674.485 170.18 677.482 175.235 679.481 181.113C681.597 186.99 682.654 193.396 682.654 200.332C682.654 207.385 681.597 213.85 679.481 219.728C677.482 225.605 674.485 230.66 670.488 234.892C666.609 239.123 661.789 242.474 656.029 244.942C650.387 247.293 643.922 248.469 636.634 248.469ZM636.634 232.599C641.101 232.599 644.98 231.659 648.271 229.778C651.563 227.897 654.266 225.429 656.382 222.373C658.498 219.316 660.026 215.907 660.967 212.146C662.025 208.267 662.553 204.329 662.553 200.332C662.553 196.453 662.025 192.574 660.967 188.695C660.026 184.815 658.498 181.406 656.382 178.468C654.266 175.411 651.563 172.943 648.271 171.062C644.98 169.181 641.101 168.241 636.634 168.241C632.167 168.241 628.288 169.181 624.996 171.062C621.705 172.943 619.001 175.411 616.885 178.468C614.77 181.406 613.183 184.815 612.125 188.695C611.184 192.574 610.714 196.453 610.714 200.332C610.714 204.329 611.184 208.267 612.125 212.146C613.183 215.907 614.77 219.316 616.885 222.373C619.001 225.429 621.705 227.897 624.996 229.778C628.288 231.659 632.167 232.599 636.634 232.599ZM699.365 154.84H718.232V172.473H718.585C719.172 170.004 720.289 167.594 721.935 165.243C723.698 162.892 725.755 160.776 728.106 158.896C730.575 156.897 733.278 155.31 736.217 154.135C739.156 152.959 742.153 152.372 745.21 152.372C747.561 152.372 749.148 152.43 749.971 152.548C750.911 152.666 751.851 152.783 752.792 152.901V172.296C751.381 172.061 749.912 171.885 748.384 171.767C746.973 171.532 745.562 171.415 744.152 171.415C740.743 171.415 737.51 172.12 734.454 173.531C731.515 174.824 728.929 176.822 726.696 179.526C724.462 182.112 722.699 185.344 721.406 189.223C720.113 193.103 719.466 197.57 719.466 202.624V246H699.365V154.84ZM837.703 225.723C837.703 228.191 837.997 229.954 838.585 231.012C839.29 232.07 840.583 232.599 842.464 232.599C843.052 232.599 843.757 232.599 844.58 232.599C845.403 232.599 846.343 232.482 847.401 232.247V246.176C846.696 246.411 845.755 246.647 844.58 246.882C843.522 247.234 842.405 247.528 841.23 247.763C840.054 247.998 838.879 248.175 837.703 248.292C836.528 248.41 835.528 248.469 834.706 248.469C830.591 248.469 827.182 247.646 824.479 246C821.775 244.354 820.012 241.474 819.189 237.36C815.192 241.239 810.255 244.06 804.378 245.824C798.618 247.587 793.034 248.469 787.627 248.469C783.513 248.469 779.575 247.881 775.813 246.705C772.052 245.647 768.701 244.06 765.763 241.945C762.941 239.711 760.649 236.949 758.886 233.657C757.24 230.248 756.417 226.31 756.417 221.844C756.417 216.201 757.417 211.617 759.415 208.09C761.531 204.564 764.234 201.801 767.526 199.803C770.935 197.805 774.696 196.394 778.811 195.571C783.042 194.631 787.274 193.925 791.506 193.455C795.15 192.75 798.618 192.28 801.909 192.045C805.201 191.692 808.081 191.163 810.549 190.458C813.135 189.752 815.134 188.695 816.544 187.284C818.072 185.756 818.836 183.522 818.836 180.584C818.836 177.997 818.19 175.882 816.897 174.236C815.721 172.59 814.193 171.356 812.312 170.533C810.549 169.593 808.551 169.005 806.317 168.77C804.084 168.417 801.968 168.241 799.97 168.241C794.327 168.241 789.684 169.416 786.04 171.767C782.396 174.118 780.339 177.762 779.869 182.699H759.768C760.12 176.822 761.531 171.944 763.999 168.065C766.468 164.185 769.583 161.07 773.345 158.719C777.224 156.368 781.573 154.723 786.393 153.782C791.212 152.842 796.149 152.372 801.204 152.372C805.671 152.372 810.079 152.842 814.428 153.782C818.778 154.723 822.657 156.251 826.066 158.367C829.592 160.483 832.413 163.245 834.529 166.654C836.645 169.945 837.703 174.001 837.703 178.82V225.723ZM817.602 200.332C814.546 202.33 810.784 203.565 806.317 204.035C801.85 204.387 797.383 204.975 792.917 205.798C790.801 206.151 788.744 206.68 786.745 207.385C784.747 207.973 782.984 208.854 781.456 210.03C779.927 211.088 778.693 212.557 777.753 214.438C776.93 216.201 776.518 218.376 776.518 220.962C776.518 223.195 777.165 225.076 778.458 226.604C779.751 228.132 781.279 229.367 783.042 230.307C784.923 231.13 786.922 231.718 789.037 232.07C791.271 232.423 793.269 232.599 795.032 232.599C797.266 232.599 799.676 232.305 802.262 231.718C804.848 231.13 807.258 230.131 809.491 228.72C811.842 227.31 813.782 225.546 815.31 223.43C816.838 221.197 817.602 218.493 817.602 215.32V200.332Z" fill="currentColor" />
        </svg>
      </>
    )
  },
  logoLink: "/",
  head: function useHead() {
    const { title } = useConfig()
    const socialCard = '/allora-link-preview'

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A self-improving decentralized AI network."
        />
        <meta
          name="og:description"
          content="A self-improving decentralized AI network."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="allora.network" />
        <meta name="twitter:url" content="https://allora.network" />
        <meta
          name="og:title"
          content={title ? title + ' – Allora' : 'Allora'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Allora" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
  primaryHue: { dark: 144.71, light: 145.41 },
  primarySaturation: { dark: 75.56, light: 55.78 },
  project: {
    link: 'https://github.com/allora-network'
  },
  chat: {
    link: 'https://discord.com/invite/allora'
  },
  footer: {
    component: (<></>)
  },
  sidebar: {
    autoCollapse: true,
  }
  // ... other theme options
}

export default config;

// Full theme configs here: https://nextra.site/docs/docs-theme/theme-configuration
