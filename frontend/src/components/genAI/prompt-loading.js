import { CircularProgress } from '@mui/material';

export default function PromptLoader() {
    return (
        <>
            <div className="mb-2 flex w-full flex-row justify-end gap-x-2 text-slate-500">            </div>
            <div
                className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 dark:bg-slate-900 sm:px-4"
            >
                <img
                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
                />

                <div className="flex max-w-3xl items-center rounded-xl">
                    <CircularProgress />
                </div>
            </div>
        </>
    )
}