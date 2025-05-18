import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { PageContentColumn } from '@/components/blocks/PageContentColumn'

type Props = {
  data: ContentBlockProps
}

export const PageContentBlock: React.FC<Props> = (block) => {

    const sectionId = block.data.id !== null ? block.data.id : 'unknown';

    return (
        <div id={sectionId} className="flex flex-row">
            <h2>{block.data.blockName}</h2>

            {block.data.columns?.map((column) => {
                return (<PageContentColumn key={column.id} data={column} />);
            })}
        </div>
    );
}