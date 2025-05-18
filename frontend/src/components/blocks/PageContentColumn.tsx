import RichText from '@/components/RichText';

type Props = {
  data: {
    richText?: {
        root: {
          type: string;
          children: {
            type: string;
            version: number;
            [k: string]: unknown;
          }[];
          direction: ('ltr' | 'rtl') | null;
          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
          indent: number;
          version: number;
        };
        [k: string]: unknown;
      } | null;
  }
}

export const PageContentColumn: React.FC<Props> = (column) => {

    return (
        <div className="flex-1 min-w-0">
            { column.data.richText && 
                <RichText className="Standard" data={column.data.richText}/>
            }
        </div>
    );
}