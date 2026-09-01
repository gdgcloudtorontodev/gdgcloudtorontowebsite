import React from 'react';
import { EVOLUTION_ERAS } from '../../../data/evolutionEras';
import { EraId, EvolutionEra } from '../../../types/evolution';

interface EraIndicatorsProps {
  activeEraId: EraId;
  onSelectEra: (eraId: EraId) => void;
}

export const EraIndicators: React.FC<EraIndicatorsProps> = ({
  activeEraId,
  onSelectEra,
}) => {
  return (
    <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 z-30 sticky top-24">
      {EVOLUTION_ERAS.map((era: EvolutionEra) => {
        const isActive = activeEraId === era.id;

        return (
          <button
            key={era.id}
            onClick={() => onSelectEra(era.id)}
            className={`px-3 py-2 rounded-xl text-left font-mono text-xs transition-all whitespace-nowrap flex items-center justify-between gap-3 ${
              isActive
                ? 'bg-white text-gray-900 font-bold shadow-lg border-l-4 border-google-blue scale-105'
                : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`text-[10px] ${isActive ? 'text-google-blue' : 'text-gray-500'}`}>
                {era.order}
              </span>
              <span>{era.shortName}</span>
            </div>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-google-green animate-pulse hidden lg:inline-block"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};
