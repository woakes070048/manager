LogLevel = {
    DEBUG:      100, // Detailed debug information.
    INFO:       200, // Interesting events.
    NOTICE:     250, // Normal but significant events.
    WARNING:    300, // Exceptional occurrences that are not errors.
    ERROR:      400, // Runtime errors that do not require immediate action.
    CRITICAL:   500, // Critical conditions.
    ALERT:      550, // Action must be taken immediately.
    EMERGENCY:  600  // System is unusable.
};

// Display log level rules
LogLevelParameters = {};

LogLevelParameters[LogLevel.DEBUG]      = { color: 'default',   label: 'debug'      };
LogLevelParameters[LogLevel.INFO]       = { color: 'info',      label: 'info'       };
LogLevelParameters[LogLevel.NOTICE]     = { color: 'primary',   label: 'notice'     };
LogLevelParameters[LogLevel.WARNING]    = { color: 'warning',   label: 'warning'    };
LogLevelParameters[LogLevel.ERROR]      = { color: 'danger',    label: 'error'      };
LogLevelParameters[LogLevel.CRITICAL]   = { color: 'danger',    label: 'critical'   };
LogLevelParameters[LogLevel.ALERT]      = { color: 'danger',    label: 'alert'      };
LogLevelParameters[LogLevel.EMERGENCY]  = { color: 'danger',    label: 'emergency'  };

LogTag = {
    WEBSITES: 'websites'
};
