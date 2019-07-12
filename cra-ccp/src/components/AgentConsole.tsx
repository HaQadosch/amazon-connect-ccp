import React, { useRef, useEffect } from 'react'
import './AgentConsole.css';

interface IAgentConsoleProps {

}

const initConf = {
  ccpUrl: 'https://twilight-sparkle.awsapps.com/connect/ccp#/',
  softphone: {
    allowFramedSoftphone: true,
    disabledRingtone: false,
  },
};

export const AgentConsole: React.FC<IAgentConsoleProps> = props => {
  const ccpContainerRef = useRef(window.document.getElementById('ccpContainer') as HTMLElement);

  useEffect(() => {
    try {
      if (ccpContainerRef) {
        console.log({ ccpContainerRef });
        (window as any).connect.core.initCCP(ccpContainerRef.current, initConf);
      }
    } catch (error) {
      console.error({ error, ccpContainerRef, connect: (window as any).connect });
    }
  }, []);

  return (
    <div className='agentConsole' data-testid='agentConsole'>
      <h1>welcome to amazon connect agent console</h1>
      <section id='ccpContainer' ref={ccpContainerRef}></section>
      <section id='section-main'>
        <header>
          <h1>amazon connect CCP integration details</h1>
        </header>
        <fieldset>
          <legend>contact details</legend>
          <div id='details'></div>
        </fieldset>
      </section>
    </div>
  )
}
