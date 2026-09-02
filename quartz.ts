import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

const customOrder = ["matematika", "fyzika", "hodnocení", "o-sekci"]

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const indexA = customOrder.indexOf(a.name)
    const indexB = customOrder.indexOf(b.name)

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    }
    if (indexA === -1 && indexB === -1) {
      return a.displayName.localeCompare(b.displayName)
    }
    return indexA === -1 ? 1 : -1
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
