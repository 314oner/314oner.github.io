import { Suspense } from 'react';
import NoteSkeleton from './NoteSkeleton';
import NoteListSkeleton from './NoteListSkeleton';

export default function App({ selectedId, isEditing }) {
    return (
        <div className="main">
            <section className="col sidebar">
                <nav>
                    <Suspense fallback={<NoteListSkeleton />}>
                        note-list
                    </Suspense>
                </nav>
            </section>
            <section key={selectedId} className="col note-viewer">
                <Suspense fallback={<NoteSkeleton isEditing={isEditing} />}>
                    note-list__item
                </Suspense>
            </section>
        </div>
    );
}