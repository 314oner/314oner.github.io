import ButtonsPrototyping from '@/components/explorations/ButtonsPrototyping';
import InputsPrototyping from '@/components/explorations/InputsPrototyping';
import LabelsPrototyping from '@/components/explorations/LabelsPrototyping';
import TodosPrototyping from '@/components/explorations/TodosPrototyping';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-3 mx-auto">
      <h1 className="text-3xl font-semibold">Проекты</h1>
      <p className="text-md">
        Осмысление подходов, проработка и реализация решений тех или иных задач.
      </p>
      <ButtonsPrototyping />
      <InputsPrototyping />
      <LabelsPrototyping />
      <TodosPrototyping />
    </div>
  );
}
