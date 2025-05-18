import type { ArchiveBlock, CallToActionBlock, ContentBlock as ContentBlockProps, FormBlock, MediaBlock } from '@/payload-types'
import { PageContentBlock } from '@/components/blocks/PageContentBlock'

type Props = {
  data: (CallToActionBlock | ContentBlockProps | MediaBlock | ArchiveBlock | FormBlock)[]
}

export const LayoutBlock: React.FC<Props> = (layoutBlocks) => {
    return (
      <div  className="flex
      flex-col
      gap-4
      px-1
      h-full">
        {
          /* Many Layout Blocks - Columns | Media */
          layoutBlocks.data.map((layoutBlock: (CallToActionBlock | ContentBlockProps | MediaBlock | ArchiveBlock | FormBlock)) => {
           
            if(layoutBlock.blockType === 'content') {
              return (<PageContentBlock key={layoutBlock.id} data={layoutBlock}/>);
            }
          })}
      </div>
    );
}