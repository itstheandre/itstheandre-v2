import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
  chakra,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

interface SuccessToastProps {
  /**
   * the text that appears describing the success message
   */
  description?: string;

  /**
   * The title that will appear in the alert messsage
   */
  title?: string;

  /**
   * The status of the toast here. By default is success
   */
  status?: AlertProps["status"];
}

export function CustomToast({
  description = "I’ll get back to you as soon as possible",
  title = "Message successfully sent",
  status = "success",
}: SuccessToastProps) {
  const toast = useToast();
  const toastIdRef = useRef();
  function close() {
    console.log("toastIdRef:", toastIdRef);
    toast.closeAll();
    if (toastIdRef.current) {
    }
  }
  return (
    <Alert
      status={status}
      alignItems="start"
      borderRadius="md"
      boxShadow="lg"
      paddingRight={8}
      textAlign="left"
      width="auto"
      bg={status === "error" ? "red.500" : "green.500"}
    >
      <AlertIcon color="white" />
      <chakra.div flex="1">
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && (
          <AlertDescription display="block">{description}</AlertDescription>
        )}
      </chakra.div>

      <CloseButton
        size="sm"
        onClick={close}
        position="absolute"
        right={1}
        top={1}
      />
    </Alert>
  );
}
