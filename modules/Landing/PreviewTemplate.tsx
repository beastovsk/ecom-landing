import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';
export const PreviewTemplate = ({url}) => {
  return (
    <Dialog>
      <DialogTrigger className='w-full'>
        <button className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white font-medium rounded-xl'>
          Открыть макет
        </button>
      </DialogTrigger>
      <DialogContent className='w-full'>
        <iframe
          style={{width: '100%', height: '600px', border: 'none'}}
          src={`https://www.figma.com/embed?embed_host=yourwebsite&url=${url}`}
          allowFullScreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};
