import React from "react";
import { RefFestival } from "../../types";
import { useActiveIndexState } from "../_utils/useActiveIndexState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/_utils/actionIconSchema";
import { UseSelectionManagementMethods } from "../interface/_utils/useSelectionManagement";
import { FeedbackModal } from "./FeedbackModal";
import { breakpointColumnsObj } from "./_utils/breakpointColumnsObj";
import { getFestivalIdentifier } from "../interface/_utils/getFestivalIdentifier";
import { NoResultsIndicator } from "./indicators/NoResultsIndicator";
import { LoadingIndicator } from "./indicators/LoadingIndicator";

interface Props {
  festivals: RefFestival[];
  selectionManagement: UseSelectionManagementMethods;
  isDataFetching: boolean;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState<number>();

  return (
    <Box
      overflow={"auto"}
      background={"#ffffff"}
      pad={{ horizontal: "xsmall" }}
      style={{ scrollBehavior: "smooth" }}
    >
      <React.Fragment>
        <FeedbackModal
          modalState={modalState}
          actionIconSchema={actionIconSchema}
        />

        <ActionIconBar
          positionPlacement={{ right: 20, bottom: 10 }}
          modalIndex={modalState.value}
          actionIconSchema={actionIconSchema}
          onClick={(index: number) => modalState.set(index)}
        />
        {(() => {
          if (props.isDataFetching) {
            return <LoadingIndicator />;
          }

          if (props.festivals.length === 0) {
            return <NoResultsIndicator />;
          }

          return (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
            >
              {props.festivals.map((festival) => {
                const { hover, select } = props.selectionManagement;
                const festivalIdentifier = getFestivalIdentifier(festival);

                return (
                  <FestivalCard
                    key={festival.title}
                    festival={festival}
                    onClick={() => openLink(festival.link)}
                    onMouseEnter={() => hover.set(festivalIdentifier)}
                    onMouseLeave={() => hover.reset()}
                    isCardHovered={hover.isActive(festivalIdentifier)}
                    isCardSelected={select.isActive(festivalIdentifier)}
                  />
                );
              })}
            </Masonry>
          );
        })()}
      </React.Fragment>
    </Box>
  );
};
