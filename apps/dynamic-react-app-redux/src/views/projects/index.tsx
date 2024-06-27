import ButtonsPrototyping from '@/components/explorations/ButtonsPrototyping';
import InputsPrototyping from '@/components/explorations/InputsPrototyping';
import LabelsPrototyping from '@/components/explorations/LabelsPrototyping';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen gap-6 p-3 mx-auto">
      <h1 className="text-3xl font-semibold">Проекты</h1>
      <p className="text-gray-500 text-md">
        Осмысление подходов, проработка и реализация решений тех или иных задач.
      </p>
      <ButtonsPrototyping />
      <InputsPrototyping />
      <LabelsPrototyping />
    </div>
  );
}
