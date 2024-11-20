import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { desckStructure } from './components/deskStructure'
import {ruKZLocale} from '@sanity/locale-ru-kz'

export default defineConfig({
  name: 'default',
  title: 'monolid',
  projectId: '5d4cymjm',
  dataset: 'production',
  token: "skY7izzp3PcLqi1Szbo0AAUjOiuPtAO9SMDNwobHPgQuQuwkDfMsVfLlYQUN6ADiT4hOcvCve2RW2GMMVoByLVbd4IcrzvLm1YlxEZHXTWvmhYQ4AoT7ayNC8UYl1CDobnXJB1yLsR05EyCOIgUdrRjmQ13xcAxEZfKMN43kVVDON7spSBtv",
  scheduledPublishing: {
    enabled: false, 
  },
  plugins: [
     structureTool({
      structure: desckStructure,
      title: 'Редактор контента 📸',
     }),
    //  visionTool(),
    
     ruKZLocale({title: 'Русский'}),

    ],

  schema: {
    types: schemaTypes,
  },
})
