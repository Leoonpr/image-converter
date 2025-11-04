
import React from 'react';

import './Converter.css'; 

// Usamos React.FC (Functional Component) para tipar o componente
const Converter: React.FC = () => {
  return (
    <div className="converter-container">
      <header className="converter-header">
        <h1>Conversor de Imagens Rápido</h1>
        <p>Converta JPG, PNG e WEBP facilmente.</p>
      </header>

      <main className="converter-main">
        {/* T1.5 - A área de upload (ainda sem lógica) */}
        <div className="upload-area">
          <div className="upload-icon">🖼️</div>
          <p>Arraste e solte sua imagem aqui</p>
          <p>ou</p>
          {/* O <input type="file" /> real ficará escondido aqui futuramente */}
          <button type="button" className="upload-button-stub">
            Selecionar Arquivo
          </button>
        </div>

        {/* T1.5 - O seletor de formato (US-3) */}
        <div className="format-selector">
          <label htmlFor="format">Converter para:</label>
          <select id="format" name="format" className="format-select-stub">
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WEBP</option>
          </select>
        </div>

        {/* Botão de ação (US-4) */}
        <button type="button" className="convert-button-stub" disabled>
          Converter
        </button>
      </main>

      {/* Área de feedback (US-7) - Escondida por enquanto */}
      {/* <div className="feedback-area">
         <p className="loading-spinner">🌀 Processando...</p> 
         <p className="error-message">Erro: O arquivo é muito grande.</p>
      </div> 
      */}
    </div>
  );
}

export default Converter;