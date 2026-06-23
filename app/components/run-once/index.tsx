import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  PlayIcon,
} from '@heroicons/react/24/solid'
import Select from '@/app/components/base/select'
import type { PromptConfig, VisionFile, VisionSettings } from '@/types/app'
import Button from '@/app/components/base/button'
import { DEFAULT_VALUE_MAX_LEN } from '@/config'
import TextGenerationImageUploader from '@/app/components/base/image-uploader/text-generation-image-uploader'

export type IRunOnceProps = {
  promptConfig: PromptConfig
  inputs: Record<string, any>
  onInputsChange: (inputs: Record<string, any>) => void
  onSend: () => void
  visionConfig: VisionSettings
  onVisionFilesChange: (files: VisionFile[]) => void
}
const RunOnce: FC<IRunOnceProps> = ({
  promptConfig,
  inputs,
  onInputsChange,
  onSend,
  visionConfig,
  onVisionFilesChange,
}) => {
  const { t } = useTranslation()

  const onClear = () => {
    const newInputs: Record<string, any> = {}
    promptConfig.prompt_variables.forEach((item) => {
      newInputs[item.key] = ''
    })
    onInputsChange(newInputs)
  }

  return (
    <div className="h-full flex flex-col">
      <section className="flex-1 flex flex-col">
        {/* input form */}
        <form className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col">
            {promptConfig.prompt_variables.map((item, index) => (
              <div className='w-full flex flex-col' key={item.key} style={{ flex: index === 0 ? 1 : 0 }}>
                <label className='text-gray-900 text-sm font-medium px-4 pt-4'>{item.name}</label>
                <div className='mt-2 flex-1 px-4 flex flex-col'>
                  {item.type === 'select' && (
                    <Select
                      className='w-full'
                      defaultValue={inputs[item.key]}
                      onSelect={(i) => { onInputsChange({ ...inputs, [item.key]: i.value }) }}
                      items={(item.options || []).map(i => ({ name: i, value: i }))}
                      allowSearch={false}
                      bgClassName='bg-gray-50'
                    />
                  )}
                  {item.type === 'string' && (
                    <input
                      type="text"
                      className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                      placeholder={`请输入${item.name}${!item.required ? `(${t('appDebug.variableTable.optional')})` : ''}`}
                      value={inputs[item.key]}
                      onChange={(e) => { onInputsChange({ ...inputs, [item.key]: e.target.value }) }}
                      maxLength={item.max_length || DEFAULT_VALUE_MAX_LEN}
                    />
                  )}
                  {item.type === 'paragraph' && (
                    <textarea
                      className="block w-full flex-1 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 resize-none placeholder-gray-500"
                      placeholder={`请输入${item.name}${!item.required ? `(${t('appDebug.variableTable.optional')})` : ''}`}
                      value={inputs[item.key]}
                      onChange={(e) => { onInputsChange({ ...inputs, [item.key]: e.target.value }) }}
                    />
                  )}
                  {item.type === 'number' && (
                    <input
                      type="number"
                      className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`${item.name}${!item.required ? `(${t('appDebug.variableTable.optional')})` : ''}`}
                      value={inputs[item.key]}
                      onChange={(e) => { onInputsChange({ ...inputs, [item.key]: e.target.value }) }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          {
            visionConfig?.enabled && (
              <div className="w-full px-4 py-4">
                <div className="text-gray-900 text-sm font-medium">{t('common.imageUploader.imageUpload')}</div>
                <div className='mt-2'>
                  <TextGenerationImageUploader
                    settings={visionConfig}
                    onFilesChange={files => onVisionFilesChange(files.filter(file => file.progress !== -1).map(fileItem => ({
                      type: 'image',
                      transfer_method: fileItem.type,
                      url: fileItem.url,
                      upload_file_id: fileItem.fileId,
                    })))}
                  />
                </div>
              </div>
            )
          }
          {promptConfig.prompt_variables.length > 0 && (
            <div className='h-[1px] bg-gray-100'></div>
          )}
          <div className='w-full px-4 py-4'>
            <div className="flex items-center justify-between gap-3">
              <Button
                className='!h-9 !px-4 text-gray-700 bg-gray-100 hover:bg-gray-200'
                onClick={onClear}
                disabled={false}
              >
                <span className='text-sm font-medium'>{t('common.operation.clear')}</span>
              </Button>
              <Button
                type="primary"
                className='!h-9 !px-6'
                onClick={onSend}
                disabled={false}
              >
                <PlayIcon className="shrink-0 w-4 h-4 mr-2" aria-hidden="true" />
                <span className='text-sm font-medium'>{t('app.generation.run')}</span>
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
export default React.memo(RunOnce)
