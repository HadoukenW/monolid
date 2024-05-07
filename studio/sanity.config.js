import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'monolid',

  projectId: '5d4cymjm',
  dataset: 'production',
  token: "sktKeI484klyfjDlWpRuJI9VD3MCiTMKBCSS8pdINTaE3zfY5IAmfqegAhy2QnRYOxrdMLAvJbrrONxD1EVd7f0Pu675M4lmiFNBdFkbQIW15TvSodpS9TVrNXCE5vhUuAXH21qvWMspJvsCxzCVpvUen3rqB640pOti8I5EkVATAMtBXEip",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
