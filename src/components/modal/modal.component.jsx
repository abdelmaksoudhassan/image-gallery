import { useCallback, useEffect } from "react";
import styles from './modal.module.css'

export default function ModalComponent ({ isOpen, onClose, children }){
    
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            onClose();
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, [escFunction]);

      if (!isOpen) return null;

    return (
        <div className={styles.modalouter}>
            <div className={styles.modalinner}>
                <p>
                    Press Esc or <u onClick={()=>onClose()} style={{'cursor':'pointer', 'color':'#873532'}}>close</u> to exit carousel</p>
                {children}
            </div>
        </div>
    );
};